terraform {
  cloud {
    organization = "jalantechnologies"
    workspaces {
      name = "boilerplate-website"
    }
  }
}

module "doppler" {
  source = "./modules/doppler"
  token  = var.doppler_token
}
