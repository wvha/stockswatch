import React, { useState } from 'react';
import MaterialTable from 'material-table';

const TableView = (props) => {
  const [state, setState] = useState({
    data: [
      {
        name: 'Apple',
        currentPrice: '320',
        stopLoss: '250',
        entryPrice: '300',
        targetPrice: '350',
      },
      {
        name: 'Tesla',
        currentPrice: '1200',
        stopLoss: '300',
        entryPrice: '400',
        targetPrice: '3000',
      },
    ],

    columns: [
      { title: 'STOCK', field: 'name' },
      { title: 'CURRENT PRICE', field: 'currentPrice' },
      { title: 'STOP LOSS', field: 'stopLoss' },
      { title: 'ENTRY PRICE', field: 'entryPrice' },
      { title: 'TARGET PRICE', field: 'targetPrice' },
    ],
  });

  return (
    <MaterialTable
      title="stockswatch table view"
      columns={state.columns}
      data={state.data}
      detailPanel={[
        {
          tooltip: 'expand',
          render: (rowData) => {
            return <div>hellooooooo</div>;
          },
        },
      ]}
      // editable={{
      //   onRowAdd: (newData) =>
      //     new Promise((resolve) => {
      //       setTimeout(() => {
      //         resolve();
      //         setState((prevState) => {
      //           const data = [...prevState.data];
      //           data.push(newData);
      //           return { ...prevState, data };
      //         });
      //       }, 600);
      //     }),
      //   onRowUpdate: (newData, oldData) =>
      //     new Promise((resolve) => {
      //       setTimeout(() => {
      //         resolve();
      //         if (oldData) {
      //           setState((prevState) => {
      //             const data = [...prevState.data];
      //             data[data.indexOf(oldData)] = newData;
      //             return { ...prevState, data };
      //           });
      //         }
      //       }, 600);
      //     }),
      //   onRowDelete: (oldData) =>
      //     new Promise((resolve) => {
      //       setTimeout(() => {
      //         resolve();
      //         setState((prevState) => {
      //           const data = [...prevState.data];
      //           data.splice(data.indexOf(oldData), 1);
      //           return { ...prevState, data };
      //         });
      //       }, 600);
      //     }),
      // }}
    />
  );
};

export default TableView;
