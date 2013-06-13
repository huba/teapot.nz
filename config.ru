#!/usr/bin/env rackup

UTOPIA_ENV = (ENV['UTOPIA_ENV'] || ENV['RACK_ENV'] || :development).to_sym
$LOAD_PATH << File.join(File.dirname(__FILE__), "lib")

# It is recommended that you always explicity specify the version of the gem you are using.
gem 'utopia', "= 0.12.1"
require 'utopia/middleware/all'

# Utopia relies heavily on a local cache:
require 'rack/cache'

if UTOPIA_ENV == :development
	use Rack::ShowExceptions
else
	use Utopia::Middleware::ExceptionHandler, "/errors/exception"
	
	use Utopia::Middleware::MailExceptions
end

use Rack::ContentLength
use Utopia::Middleware::Logger

use Utopia::Middleware::Redirector, {
	:strings => {
		'/' => '/welcome/index',
	},
	:errors => {
		404 => "/errors/file-not-found"
	}
}

use Utopia::Middleware::Requester
use Utopia::Middleware::DirectoryIndex
use Utopia::Middleware::Controller

# To enable full Sendfile support, please refer to the Rack::Sendfile documentation for your webserver.
use Rack::Sendfile
use Utopia::Middleware::Static

if UTOPIA_ENV == :production
	use Rack::Cache, {
		:metastore   => "file:#{Utopia::Middleware::default_root("cache/meta")}",
		:entitystore => "file:#{Utopia::Middleware::default_root("cache/body")}",
		:verbose => false
	}
end

use Utopia::Middleware::Content

run lambda { |env| [404, {}, []] }
