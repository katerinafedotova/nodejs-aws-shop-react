import { Construct, Stack } from "@aws-cdk/core";
import * as s3 from "@aws-cdk/aws-s3";
import * as s3deploy from "@aws-cdk/aws-s3-deployment";
import * as iam from "@aws-cdk/aws-iam";
import * as cloudfront from "@aws-cdk/aws-cloudfront";

export class StaticSite extends Construct {
    constructor(parent: Stack, name: string) {
        super(parent, name);

        // create OAI - special CloudFront user identity that you can associate with your S3 bucket
        const cloudFrontOAI = new cloudfront.OriginAccessIdentity(this, "JSCC-OAI")

        // create an s3 bucket
        const siteBucket = new s3.Bucket(this, "JSCCStaticBucket", {
            bucketName: "nodejs-aws-shop-react",
            websiteIndexDocument: "index.html",
            publicReadAccess: false,
            blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL
        })

        // add a policy statement to perform actions on this bucket (read access for cloudfront distribution)
        siteBucket.addToResourcePolicy(new iam.PolicyStatement({
            actions: ["s3:GetObject"],
            resources: [siteBucket.arnForObjects("*")],
            // entities to which permissions (actions) apply
            principals: [new iam.CanonicalUserPrincipal(cloudFrontOAI.cloudFrontOriginAccessIdentityS3CanonicalUserId)]
        }))

        // create cloudfront distribution
        const distribution = new cloudfront.CloudFrontWebDistribution(this, "JSCC-distribution", {
            originConfigs: [{
                s3OriginSource: {
                    s3BucketSource: siteBucket,
                    originAccessIdentity: cloudFrontOAI,
                },
                // cache behaviour - how to cache different content types
                behaviors: [{
                    isDefaultBehavior: true
                }]
            }]
        })

        // deploy the bucket
        new s3deploy.BucketDeployment(this, "JSCC-Bucket-Deployment", {
            // folder in our repository with the entry file
            sources: [s3deploy.Source.asset(".")],
            // the bucket where the file should be deployed
            destinationBucket: siteBucket,
            distribution,
            // after each deployment the files will be invalidated and the cache will be refreshed
            distributionPaths: ["/*"]

        })
    }
}