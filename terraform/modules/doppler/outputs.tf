output "backend_preview_token" {
  value = doppler_service_token.backend_preview_token.key
}

output "backend_production_token" {
  value = doppler_service_token.backend_production_token.key
}
