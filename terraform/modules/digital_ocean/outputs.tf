output "backend_db_host" {
  value = digitalocean_database_cluster.backend_db.host
}

output "backend_db_port" {
  value = digitalocean_database_cluster.backend_db.port
}

output "backend_db_user" {
  value = digitalocean_database_user.backend_db.name
}

output "backend_db_password" {
  value     = digitalocean_database_user.backend_db.password
  sensitive = true
}

output "backend_db_staging_name" {
  value = digitalocean_database_db.backend_db_staging.name
}

output "backend_db_production_name" {
  value = digitalocean_database_db.backend_db_production.name
}
