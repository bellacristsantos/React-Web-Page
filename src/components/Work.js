import React, { useState, useEffect } from 'react';
import * as S from '../styles/Work.styles';

const Work = () => {
  const [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {
    import('./../data.json')
      .then((data) => setGalleryItems(data.default))
      .catch((error) => console.error('Error importing data.json:', error));
  }, []);

  const handleFilter = (filterValue) => {
    const filteredItems = galleryItems.filter(
      (item) => item.year === filterValue || item.city === filterValue
    );
    renderGallery(filteredItems);
  };

  const handleSort = (sortKey) => {
    const sortedItems = galleryItems
      .slice()
      .sort((a, b) => (a[sortKey] > b[sortKey] ? 1 : -1));
    renderGallery(sortedItems);
  };

  const handleResetFilter = () => {
    renderGallery(galleryItems);
  };

  const renderGallery = (items) => {
    const galleryContainer = items.map((item, index) => (
      <S.ImageContainer
        key={item.id}
        className="col-md-6 col-lg-3 overflow-hidden"
      >
        <S.ContainerHover>
          <a href={`link_to_image_${index + 1}.html`}>
            <S.StyledImage
              loading="lazy"
              src={item.imageUrl}
              alt={`Image ${index + 1}`}
            />
          </a>
        </S.ContainerHover>
        <S.Table className="table table-bordered">
          <tbody>
            <tr>
              <S.Th>Year</S.Th>
              <S.Td>{item.year}</S.Td>
            </tr>
            <tr>
              <S.Th>City</S.Th>
              <S.Td>{item.city}</S.Td>
            </tr>
          </tbody>
        </S.Table>
      </S.ImageContainer>
    ));

    return galleryContainer;
  };

  return (
    <S.Container>
      <section>
        <div className="container mt-4">
          <S.WorkTitle>Gallery</S.WorkTitle>

          <S.FilterButtons>
            <S.Button onClick={() => handleFilter(2023)} id="filter-2023">
              2023
            </S.Button>
            <S.Button onClick={() => handleFilter(2022)} id="filter-2022">
              2022
            </S.Button>
            <S.Button onClick={() => handleFilter(2021)} id="filter-2021">
              2021
            </S.Button>
            <S.Button
              onClick={() => handleFilter('Copenhagen')}
              id="filter-Copenhagen"
            >
              Copenhagen
            </S.Button>
            <S.Button
              onClick={() => handleFilter('Barcelona')}
              id="filter-Barcelona"
            >
              Barcelona
            </S.Button>
            <S.Button onClick={() => handleFilter('London')} id="filter-London">
              London
            </S.Button>
            <S.Button onClick={() => handleFilter('Berlin')} id="filter-Berlin">
              Berlin
            </S.Button>
            <S.Button onClick={() => handleSort('year')} id="sort-year">
              Sort by Year
            </S.Button>
            <S.Button onClick={() => handleSort('city')} id="sort-city">
              Sort by City
            </S.Button>
            <S.Button onClick={handleResetFilter} id="reset-filter">
              Reset Filter
            </S.Button>
          </S.FilterButtons>

          <div className="row">{renderGallery(galleryItems)}</div>
        </div>
      </section>
    </S.Container>
  );
};

export default Work;
