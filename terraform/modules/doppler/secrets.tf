resource "doppler_secret" "backend_preview_secrets" {
  for_each = var.backend_preview_secrets
  project  = doppler_project.backend.name
  config   = doppler_environment.backend_preview.slug
  name     = each.key
  value    = each.value
}

resource "doppler_secret" "backend_production_secrets" {
  for_each = var.backend_production_secrets
  project  = doppler_project.backend.name
  config   = doppler_environment.backend_production.slug
  name     = each.key
  value    = each.value
}
