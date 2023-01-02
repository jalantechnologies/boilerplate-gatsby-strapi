resource "digitalocean_database_cluster" "backend_db" {
  name       = "boilerplate-website-db"
  engine     = "pg"
  version    = "11"
  size       = "db-s-1vcpu-1gb"
  region     = "nyc1"
  node_count = 1
}

resource "digitalocean_database_user" "backend_db" {
  cluster_id = digitalocean_database_cluster.backend_db.id
  name       = "doapp"
}

resource "digitalocean_database_db" "backend_db_staging" {
  cluster_id = digitalocean_database_cluster.backend_db.id
  name       = "website-staging"
}

resource "digitalocean_database_db" "backend_db_production" {
  cluster_id = digitalocean_database_cluster.backend_db.id
  name       = "website-production"
}
