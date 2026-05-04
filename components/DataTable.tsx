import React from 'react';
import { colors } from '../tokens/colors';
import { fontFamily, fontWeight, fontSize, letterSpacing } from '../tokens/typography';

/**
 * DataTable — extracted from Tables section (pages 15–17).
 *
 * Observed structure:
 * - Dark rounded container
 * - Header row: #2C2C2C, white semibold text
 * - Data rows: alternating #1E1E1E / #252525
 * - Row number column: yellow (#F0B90B)
 * - Optional icon column (circular logo, 28px)
 * - Source attribution below the table
 *
 * 3-column variant:  #  | Logo + Label 1  | Label 2  | Label 3
 * 4-column variant:  #  | Logo + Label 1  | Label 2  | Label 3  | Label 4
 * 5-column variant:  #  | Logo + Label 1  | Label 2  | Label 3  | Label 4  | Label 5
 */

export interface TableColumn {
  key: string;
  label: string;
  width?: string;
  align?: 'left' | 'center' | 'right';
}

export interface TableRow {
  id: number;
  iconSrc?: string;
  iconAlt?: string;
  cells: Record<string, React.ReactNode>;
}

interface DataTableProps {
  columns: TableColumn[];
  rows: TableRow[];
  sourceText?: string;
  style?: React.CSSProperties;
}

const cellBase: React.CSSProperties = {
  padding: '12px 16px',
  fontFamily: fontFamily.base,
  fontSize: fontSize.tableBody,
  color: colors.textPrimary,
  borderBottom: `1px solid ${colors.borderSubtle}`,
  whiteSpace: 'nowrap',
};

export const DataTable: React.FC<DataTableProps> = ({ columns, rows, sourceText, style }) => {
  return (
    <div
      style={{
        borderRadius: 8,
        overflow: 'hidden',
        border: `1px solid ${colors.borderMedium}`,
        ...style,
      }}
    >
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: colors.tableHeader }}>
            {/* Row number header */}
            <th
              style={{
                ...cellBase,
                fontWeight: fontWeight.semibold,
                textAlign: 'left',
                width: '48px',
                color: colors.textPrimary,
                letterSpacing: letterSpacing.wide,
                borderBottom: `1px solid ${colors.borderMedium}`,
              }}
            >
              #
            </th>
            {columns.map((col) => (
              <th
                key={col.key}
                style={{
                  ...cellBase,
                  fontWeight: fontWeight.semibold,
                  textAlign: col.align ?? 'left',
                  width: col.width,
                  letterSpacing: letterSpacing.wide,
                  borderBottom: `1px solid ${colors.borderMedium}`,
                }}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => {
            const isAlt = index % 2 === 1;
            return (
              <tr
                key={row.id}
                style={{ backgroundColor: isAlt ? colors.tableRowAlt : colors.tableRowPrimary }}
              >
                {/* Row number */}
                <td
                  style={{
                    ...cellBase,
                    fontWeight: fontWeight.semibold,
                    color: colors.bnbYellow,
                    textAlign: 'left',
                  }}
                >
                  {row.id}
                </td>
                {columns.map((col, colIndex) => {
                  const isFirstCol = colIndex === 0;
                  return (
                    <td
                      key={col.key}
                      style={{
                        ...cellBase,
                        textAlign: col.align ?? 'left',
                        fontWeight: isFirstCol ? fontWeight.medium : fontWeight.regular,
                      }}
                    >
                      {isFirstCol && (row.iconSrc || row.iconAlt) ? (
                        <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          {row.iconSrc && (
                            <img
                              src={row.iconSrc}
                              alt={row.iconAlt ?? ''}
                              style={{
                                width: 28,
                                height: 28,
                                borderRadius: '50%',
                                objectFit: 'cover',
                                flexShrink: 0,
                              }}
                            />
                          )}
                          {row.cells[col.key]}
                        </span>
                      ) : (
                        row.cells[col.key]
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      {sourceText && (
        <div
          style={{
            backgroundColor: colors.tableRowPrimary,
            padding: '8px 16px',
            fontFamily: fontFamily.base,
            fontSize: fontSize.source,
            color: colors.textMuted,
            borderTop: `1px solid ${colors.borderSubtle}`,
          }}
        >
          {sourceText}
        </div>
      )}
    </div>
  );
};

export default DataTable;
