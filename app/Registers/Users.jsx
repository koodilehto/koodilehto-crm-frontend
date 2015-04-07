'use strict';
var React = require('react');

var Create = require('lib/Create.jsx');
var Table = require('lib/Table.jsx');
var getSchema = require('lib/get_schema');


module.exports = function(api) {
    var actions = require('./actions/Actions')(api, 'users');
    var store = require('./stores/Store')(actions);
    var schema = getSchema(api.users);

    return React.createClass({
        displayName: 'Users',

        render: function() {
            var i18n = {
                user: {
                    createNew: 'Create a new user'
                },
            };

            return (
                <div className='pure-g'>
                    <div className='pure-u-1'>
                        <h2>Users</h2>
                    </div>

                    <div className='pure-u-1 controls'>
                        <Create schema={schema} actions={actions}>
                            {i18n.user.createNew}
                        </Create>
                    </div>

                    <div className='pure-u-1'>
                        <Table
                            store={store} actions={actions}
                            schema={schema} />
                    </div>
                </div>
            );
        },
    });
};
