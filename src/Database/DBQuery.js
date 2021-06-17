/**
 * List all predefined databases query.
 *
 * @author Hubert Ganda <hubertganda@gmail.com>
 */

export const createTableFav =
  'CREATE TABLE IF NOT EXISTS m_fav (id INTEGER NOT NULL, title TEXT, ' +
  'overview TEXT, poster_path TEXT)';
