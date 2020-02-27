import axios from 'axios';

export default axios.create({
  baseURL:'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer AanEGoiwVCGY0Q3EXHjdY5zAzDVfB8-Wy_l9PRG-VjZXD4a5G38hdv5Gk_bfksh9WAnspdBG_S4O6pDuRFxSYUgwPAsPtFDjYduofQ847iOVVozR-qyjSIhuEukYXnYx'
  }
});
