import { useRef, useState } from 'react';
import { FileInput, Table } from 'react-daisyui';
import { useAuthState } from '~/components/contexts/UserContext';
import { Head } from '~/components/shared/Head';

const UploadHandler = ({ children }: { children?: JSX.Element }) => {
  return (<>
    <input type="file" className='file-input file-input-bordered file-input-md' accept='.csv' />
    {children}
  </>)
}

const RenderUpload = ({ headers, data }: { headers: string[], data: string[][] }) => {
  return <Table zebra className='table-compact overflow-x-auto'>
    <Table.Head>
      {headers.map(val => <span>{val}</span>)}
    </Table.Head>
    <Table.Body>
      {data.map(row =>
        <Table.Row hover>{row.map(cell =>
          <span>{cell}</span>)}
        </Table.Row>
      )}
    </Table.Body>
  </Table>
}

export default function Index() {
  const headers = ["account", "followsBack"]
  const data = [["1", "2"], ["1", "3"]];
  return (
    <>
      <Head title="CSV" />
      <div className="hero">
        <div className="text-center hero-content">
          <div>
            <UploadHandler />
            <RenderUpload data={data} headers={headers} />
          </div>
        </div>
      </div>
    </>
  );
}
