import React from 'react';
import AdminLayout from '../layout';

const adminCategories = (props) => {
    let categoryList;
    if (props.categories) {
        categoryList = props.categories.map(cat => 
            <tr id={cat._id}>
                <td>{cat.name}</td>
                <td>Edit</td>
                <td>Remove</td>
            </tr>
        )
    }
    return (
        <AdminLayout>
            <h2>Order list</h2>
            <div className="table-responsive pt-2">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>Category name</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {categoryList}
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    )
}

export default adminCategories;