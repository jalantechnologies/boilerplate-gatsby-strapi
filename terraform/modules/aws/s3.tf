resource "aws_s3_bucket" "website_uploads_staging" {
  bucket = "boilerplate-website-uploads-staging"
}

resource "aws_s3_bucket_ownership_controls" "website_uploads_staging" {
  bucket = aws_s3_bucket.website_uploads_staging.id

  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

resource "aws_s3_bucket_public_access_block" "website_uploads_staging" {
  bucket = aws_s3_bucket.website_uploads_staging.id

  block_public_acls       = false
  block_public_policy     = true
  ignore_public_acls      = false
  restrict_public_buckets = true
}

resource "aws_s3_bucket" "website_uploads_production" {
  bucket = "boilerplate-website-uploads-production"
}

resource "aws_s3_bucket_ownership_controls" "website_uploads_production" {
  bucket = aws_s3_bucket.website_uploads_production.id

  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

resource "aws_s3_bucket_public_access_block" "website_uploads_production" {
  bucket = aws_s3_bucket.website_uploads_production.id

  block_public_acls       = false
  block_public_policy     = true
  ignore_public_acls      = false
  restrict_public_buckets = true
}
