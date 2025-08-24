source "https://rubygems.org"

# Hello! This is where you manage which Jekyll version is used to run.
gem "jekyll", "~> 4.2.0"

# This is the default theme for new Jekyll sites.
gem "minima", "~> 2.5"

# Required gems for Ruby 3.4 and Jekyll
gem "csv"
gem "base64"
gem "bigdecimal"
gem "webrick", "~> 1.7"

# File watcher on Windows
gem "wdm", ">= 0.1.0" if Gem.win_platform?

# Jekyll plugins
gem "jekyll-feed", "~> 0.12"
gem "jekyll-sitemap"
gem "jekyll-paginate"
gem "jekyll-seo-tag"
gem "jekyll-github-metadata"
gem "jekyll-include-cache"
gem "jekyll-remote-theme"

# Windows and JRuby compatibility
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# JRuby-specific dependency
gem "http_parser.rb", "~> 0.6.0", platforms: [:jruby]
