param(
  [string]$cmd
)

switch ($cmd) {
  "up" { docker compose up --build }
  "down" { docker compose down }
  "restart" {
    docker compose down
    docker compose up --build
  }
  "migrate" { docker compose exec django python manage.py migrate }
  "makemigrations" { docker compose exec django python manage.py makemigrations }
  "shell" { docker compose exec django python manage.py shell }
  default { Write-Host "Unknown command" }
}
