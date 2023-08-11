import React from 'react';
import Table from 'ui-component/table/Table';

const Sounds = () => {
  const data = [
    {
      title: 'John Dave',
      category: 'john@gmail.com',
      coverAlbum: 'https://image.shutterstock.com/image-photo/small-juicy-hamburger-canapes-on-260nw-570368917.jpg',
      premiumPlan: 'Free',
      date: '13-05-2023'
    },
    {
      title: 'Bren Micheal',
      category: 'bren@gmail.com',
      coverAlbum: 'https://image.shutterstock.com/image-photo/small-juicy-hamburger-canapes-on-260nw-570368917.jpg',
      premiumPlan: 'Free',
      date: '13-05-2023'
    },
    {
      title: 'Marry Jane',
      category: 'marry@gmail.com',
      coverAlbum: 'https://image.shutterstock.com/image-photo/small-juicy-hamburger-canapes-on-260nw-570368917.jpg',
      premiumPlan: 'Premium',
      date: '13-05-2023'
    },
    {
      title: 'Shohail Holmes',
      category: 'shohail@gmail.com',
      coverAlbum: 'https://image.shutterstock.com/image-photo/small-juicy-hamburger-canapes-on-260nw-570368917.jpg',
      premiumPlan: 'Free',
      date: '13-05-2023'
    },
    {
      title: 'Aseka Jenipha',
      category: 'aseka@gmail.com',
      coverAlbum: 'https://image.shutterstock.com/image-photo/small-juicy-hamburger-canapes-on-260nw-570368917.jpg',
      premiumPlan: 'Pro',
      date: '13-05-2023'
    },
    {
      title: 'Meuko Samuel',
      category: 'meuko@gmail.com',
      coverAlbum: 'https://image.shutterstock.com/image-photo/small-juicy-hamburger-canapes-on-260nw-570368917.jpg',
      premiumPlan: 'Expert',
      date: '13-05-2023'
    }
  ];
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
      field: 'coverAlbum',
      width: 150,
      editable: true,
      render: (params) => <img src={params.coverAlbum} alt={params.coverAlbum} style={{ borderRadius: '50%' }} height="40" width="40" />
    },
    {
      title: 'Premium plan',
      field: 'premiumPlan'
    },
    {
      title: 'Date',
      field: 'date'
    }
  ];

  return <Table title="Sounds" data={data} columns={columns} />;
};

export default Sounds;
