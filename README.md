# Test Steps

    bundle install
    yarn install
    bundle exec rails db:create db:migrate
    bundle exec rails s

Visit http://localhost:3000/
Click Refresh Test a bunch of times

* Notice in console, "ActionCable connection count: ##" grows constantly
* Notice "MessageChannel transmitting" in console gets printed out extra times every time you click it
* Notice in browser, /cable messages grow every time you click it
