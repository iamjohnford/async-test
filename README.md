# Test Steps

    bundle install
    yarn install
    bundle exec rails db:create db:migrate
    bundle exec rails s

Visit http://localhost:3000/

Upload around 10 files. Test files can be found in `test/fixtures/files`.

Every so often, an error such as the following appears:

    ActiveRecord::RecordNotUnique in MessagesController#upload PG::UniqueViolation:
    ERROR: duplicate key value violates unique constraint "index_active_storage_attachments_uniqueness"
    DETAIL: Key (record_type, record_id, name, blob_id)=(Message, 1, images, 1218) already exists.