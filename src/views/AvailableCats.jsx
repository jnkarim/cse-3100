import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Siamese' },
  { name: 'Mittens', age: '2', breed: 'Bengal' },
  { name: 'Shadow', age: '1', breed: 'Abyssinian' },
  { name: 'Pumpkin', age: '3', breed: 'Persian' },
  { name: 'Luna', age: '4', breed: 'Birman' },
  { name: 'Simba', age: '2', breed: 'Sphynx' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('');

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          availableCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())
          )
        );
        const catsWithImages = availableCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));

        setCats(catsWithImages);
        setFilteredCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  // Filter the cats based on search term and selected breed
  useEffect(() => {
    const filtered = cats.filter((cat) => {
      const matchesName = cat.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesBreed = selectedBreed === '' || cat.breed === selectedBreed;
      return matchesName && matchesBreed;
    });
    setFilteredCats(filtered);
  }, [searchTerm, selectedBreed, cats]);

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      {/* Filters */}
      <div className="filters mb-4">
        <input
          type="text"
          placeholder="Search by name"
          className="form-control mb-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ maxWidth: '300px', margin: '0 auto' }}
        />

        <select
          className="form-select"
          value={selectedBreed}
          onChange={(e) => setSelectedBreed(e.target.value)}
          style={{ maxWidth: '300px', margin: '0 auto' }}
        >
          <option value="">All Breeds</option>
          <option value="Siamese">Siamese</option>
          <option value="Bengal">Bengal</option>
          <option value="Abyssinian">Abyssinian</option>
          <option value="Persian">Persian</option>
          <option value="Birman">Birman</option>
          <option value="Sphynx">Sphynx</option>
        </select>
      </div>

      {/* Cat Cards */}
      <div className="mt-2 row g-4 cats-container" id="cats-container">
        {filteredCats.length > 0 ? (
          filteredCats.map((cat, i) => (
            <div key={i} className="col-md-4">
              <div className="cat-card">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="img-fluid mb-2"
                  style={{
                    borderRadius: '8px',
                    height: '200px',
                    objectFit: 'cover',
                  }}
                />
                <div className="cat-info">
                  <h3 className="h5 mb-1">{cat.name}</h3>
                  <p className="mb-0">Age: {cat.age}</p>
                  <p className="mb-0">Breed: {cat.breed}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No cats found matching the criteria.</p>
        )}
      </div>
    </section>
  );
}
