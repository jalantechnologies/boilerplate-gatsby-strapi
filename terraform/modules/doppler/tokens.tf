resource "doppler_service_token" "backend_preview_token" {
  project = doppler_project.backend.name
  config  = doppler_environment.backend_preview.slug
  name    = "CI"
  access  = "read"
}

resource "doppler_service_token" "backend_production_token" {
  project = doppler_project.backend.name
  config  = doppler_environment.backend_production.slug
  name    = "CI"
  access  = "read"
}
