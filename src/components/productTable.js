import React, { Component } from 'react';
import ProductRow from "./productRow";
import ProductCategoryRow from './productCategoryRow';

class ProductTable extends Component {
    render() {
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;

        const rows = [];
        let lastCategory = null;

        this.props.products.forEach((product) => {
            if (product.name.indexOf(filterText) === -1) {//"aikol".indexOf("input") == -1;Eger owol character jok bolso ele owol productu  chygarbai koiot
                return;//stops the execution of function
            }
            if (inStockOnly && !product.stocked) { //false && !true;
                return;
            }
            if (product.category !== lastCategory) {//Electronics !== null
                rows.push(
                    <ProductCategoryRow
                        category={product.category}
                        key={product.category} />
                );
            }
            rows.push(
                <ProductRow
                    product={product}
                    key={product.name}
                />
            );
            lastCategory = product.category;
        });
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}


export default ProductTable;