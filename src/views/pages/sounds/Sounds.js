import React, { useEffect, useState } from 'react';
import Table from 'ui-component/table/Table';
import { useDispatch } from 'react-redux';
import { readAllSounds } from '../../../store/soundReducer';

const Sounds = () => {
  const dispatch = useDispatch();
  const [sounds, setSounds] = useState([]);
  console.log(sounds);

  useEffect(() => {
    dispatch(readAllSounds()).then((res) => {
      const editable = res.payload.map((o) => ({ ...o }));
      setSounds(editable);
    });
  }, [dispatch]);
  const columns = [
    {
      title: 'Title',
      field: 'title'
    },
    {
      title: 'Category',
      field: 'category'
    },
    {
      title: 'Cover Album',
      field: 'coverImage',
      width: 150,
      editable: true,
      render: (params) => (
        <img src={params.coverImage.img} alt={params.coverImage.img} style={{ borderRadius: '50%' }} height="40" width="40" />
      )
    },
    {
      title: 'Premium plan',
      field: 'premium'
    },
    {
      title: 'Link',
      field: 'filePath',
      width: 150,
      editable: true,
      render: (params) => (
        <a href={params.filePath.snd} target="_blank" rel="noreferrer">
          Click to play
        </a>
      )
    },
    {
      title: 'Date',
      field: 'createdAt'
    }
  ];

  return <Table title="Sounds" data={sounds} columns={columns} />;
};

export default Sounds;
