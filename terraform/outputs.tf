output "doppler_backend_preview_token" {
  value     = module.doppler.backend_preview_token
  sensitive = true
}

output "doppler_backend_production_token" {
  value     = module.doppler.backend_production_token
  sensitive = true
}
