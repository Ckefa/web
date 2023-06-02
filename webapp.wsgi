import sys

path = "/var/www/web/"

sys.path.inser(0, path)

from app import app as application
