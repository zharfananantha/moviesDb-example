/**
 * Database initiation file.
 *
 * @author Hubert Ganda <hubertganda@gmail.com>
 */

import { openDatabase } from 'react-native-sqlite-storage';
import { createTableFav } from './DBQuery';

export const db = openDatabase({ name: 'database.db' });
const tagCreate = 'create';
const tagQuery = 'query';

/* called once when apps is starting.
 *
 */
export const init = () => {
  db.transaction(tx => {
    query(tx, 'm_fav', createTableFav);
  });
};

export const addToFav = (data) => {
  return new Promise((success, fail) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO m_fav (id, title, overview, poster_path) VALUES (?,?,?,?)',
        [data.id, data.original_title, data.overview, data.poster_path],
        (tx, results) => {
          console.log('Results ', results.rowsAffected);
          if (results.rowsAffected > 0) {
            success(true);
          } else
            fail();
        }
      );
    });
  });
}

export const getAllFav = () => {
  return new Promise((success, fail) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM m_fav',
        [],
        (tx, results) => {
          var temp = [];
          for (let i = 0; i < results.rows.length; ++i)
            temp.push(results.rows.item(i));
          success(temp)
        }
      );
    })
  });
}

export const delItemFav = (data) => {
  return new Promise((success, fail) => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM m_fav where id=?',
        [data.id],
        (tx, results) => {
          console.log('Results ', results.rowsAffected);
          if (results.rowsAffected > 0) {
            success(true);
          } else
            fail();
        }
      );
    });
  });
}

const query = (tx, table, queryCreate) => {
  tx.executeSql(
    `SELECT name FROM sqlite_master WHERE type='table' AND name='${table}'`,
    [],
    (txn, queryResults) => {
      if (queryResults.rows.length === 0) {
        // table not found, creating the table
        txn.executeSql(queryCreate, [], (txn1, createResults) => {
          console.log(`${tagCreate} ${table}`, createResults);
        });
      } else {
        // table found, query finish
        console.log(`${tagQuery} ${table}`, queryResults.rows.raw());
      }
    },
  );
};
