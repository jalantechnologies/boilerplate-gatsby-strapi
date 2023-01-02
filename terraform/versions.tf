terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }

    digitalocean = {
      source  = "digitalocean/digitalocean"
      version = "2.25.2"
    }

    doppler = {
      source = "DopplerHQ/doppler"
    }
  }
}
