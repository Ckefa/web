import sys

path = "/var/www/web/"

sys.path.insert(0, path)

from app import app as application
