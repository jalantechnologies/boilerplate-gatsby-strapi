resource "doppler_environment" "backend_preview" {
  project = doppler_project.backend.name
  slug    = "preview"
  name    = "Preview"
}

resource "doppler_environment" "backend_production" {
  project = doppler_project.backend.name
  slug    = "production"
  name    = "Production"
}
