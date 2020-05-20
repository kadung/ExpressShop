import React from 'react';
import AdminLayout from '../layout';

const adminOrders = (props) => {
    return (
        <AdminLayout>
            <h2>Order list</h2>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Order ID</th>
                            <th>Customer Name</th>
                            <th>Total</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>abc123</td>
                            <td>Guest</td>
                            <td>1,000,000 VND</td>
                            <td>Paid</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    )
}

export default adminOrders;