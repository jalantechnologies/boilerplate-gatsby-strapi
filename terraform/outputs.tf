output "aws_website_access_key_id" {
  value = module.aws.website_access_key_id
}

output "aws_website_access_secret" {
  value     = module.aws.website_access_secret
  sensitive = true
}

output "digital_ocean_backend_db_host" {
  value = module.digital_ocean.backend_db_host
}

output "digital_ocean_backend_db_port" {
  value = module.digital_ocean.backend_db_port
}

output "digital_ocean_backend_db_user" {
  value = module.digital_ocean.backend_db_user
}

output "digital_ocean_backend_db_password" {
  value     = module.digital_ocean.backend_db_password
  sensitive = true
}

output "digital_ocean_backend_db_staging_name" {
  value = module.digital_ocean.backend_db_staging_name
}

output "digital_ocean_backend_db_production_name" {
  value = module.digital_ocean.backend_db_production_name
}

output "doppler_backend_preview_token" {
  value     = module.doppler.backend_preview_token
  sensitive = true
}

output "doppler_backend_production_token" {
  value     = module.doppler.backend_production_token
  sensitive = true
}
