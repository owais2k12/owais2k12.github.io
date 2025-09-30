source "https://rubygems.org"

# GitHub Pages compatibility
gem "github-pages", group: :jekyll_plugins

# Required gems for Ruby 3.4 and Jekyll
gem "csv"
gem "base64"
gem "bigdecimal"
gem "webrick", "~> 1.7"

# File watcher on Windows
gem "wdm", ">= 0.1.0" if Gem.win_platform?

# Windows and JRuby compatibility
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# JRuby-specific dependency
gem "http_parser.rb", "~> 0.6.0", platforms: [:jruby]
