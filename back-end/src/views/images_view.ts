import Image from '../models/Image';
import Orphanage from '../models/Image';

export default {
  render(image: Image) {
    return {
      id: image.id,
      url: `http:10.0.0.116:3333/uploads/${image.path}`,
    };
  },

  renderMany(images: Image[]) {
    return images.map(image => this.render(image))
  }
};