terraform {
  cloud {
    organization = "jalantechnologies"
    workspaces {
      name = "boilerplate-website"
    }
  }
}

module "aws" {
  source = "./modules/aws"
}

module "digital_ocean" {
  source = "./modules/digital_ocean"
}

module "doppler" {
  source                  = "./modules/doppler"
  backend_preview_secrets = {
    AWS_ACCESS_KEY_ID = module.aws.website_access_key_id
    AWS_ACCESS_SECRET = module.aws.website_access_secret
    AWS_BUCKET        = module.aws.website_staging_uploads_bucket
    AWS_REGION        = "us-east-1"
    DATABASE_HOST     = module.digital_ocean.backend_db_host
    DATABASE_PORT     = module.digital_ocean.backend_db_port
    DATABASE_USERNAME = module.digital_ocean.backend_db_user
    DATABASE_PASSWORD = module.digital_ocean.backend_db_password
    DATABASE_NAME     = module.digital_ocean.backend_db_staging_name
  }
  backend_production_secrets = {
    AWS_ACCESS_KEY_ID = module.aws.website_access_key_id
    AWS_ACCESS_SECRET = module.aws.website_access_secret
    AWS_BUCKET        = module.aws.website_production_uploads_bucket
    AWS_REGION        = "us-east-1"
    DATABASE_HOST     = module.digital_ocean.backend_db_host
    DATABASE_PORT     = module.digital_ocean.backend_db_port
    DATABASE_USERNAME = module.digital_ocean.backend_db_user
    DATABASE_PASSWORD = module.digital_ocean.backend_db_password
    DATABASE_NAME     = module.digital_ocean.backend_db_production_name
  }
}
