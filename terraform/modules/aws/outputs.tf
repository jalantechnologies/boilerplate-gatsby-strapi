output "website_access_key_id" {
  value = aws_iam_access_key.website.id
}

output "website_access_secret" {
  value     = aws_iam_access_key.website.secret
  sensitive = true
}

output "website_staging_uploads_bucket" {
  value = aws_s3_bucket.website_uploads_staging.bucket
}

output "website_production_uploads_bucket" {
  value = aws_s3_bucket.website_uploads_production.bucket
}
