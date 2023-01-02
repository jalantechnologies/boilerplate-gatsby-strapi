resource "aws_iam_user" "website" {
  name = "boilerplate-website"
  path = "/apps/"
}

resource "aws_iam_user_policy_attachment" "website" {
  user       = aws_iam_user.website.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonS3FullAccess"
}

resource "aws_iam_access_key" "website" {
  user = aws_iam_user.website.name
}
