provider "aws" {
  region     = "us-east-1"
  access_key = var.aws_access_key
  secret_key = var.aws_secret_key
}

provider "digitalocean" {
  token = var.digital_ocean_token
}

provider "doppler" {
  doppler_token = var.doppler_token
}
