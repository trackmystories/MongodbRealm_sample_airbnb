import {ObjectId} from 'bson';

class Listing {
  constructor({
    _id,
    access,
    accommodates,
    address,
    amenities,
    availability,
    bathrooms,
    bed_type,
    bedrooms,
    beds,
    calendar_last_scraped,
    cancellation_policy,
    cleaning_fee,
    description,
  }) {
    this._id = id;
    this.access = access;
    this.accommodates = accommodates;
    this.address = address;
    this.amenities = amenities;
    this.availability = availability;
    this.bathrooms = bathrooms;
    this.bed_type = bed_type;
    this.bedrooms = bedrooms;
    this.beds = beds;
    this.calendar_last_scraped = calendar_last_scraped;
    this.cancellation_policy = cancellation_policy;
    this.cleaning_fee = cleaning_fee;
    this.description = description;
  }
  static schema = {
    name: 'listingsAndReview',
    properties: {
      _id: 'string?',
      access: 'string?',
      accommodates: 'int?',
      address: 'listingsAndReview_address',
      amenities: 'string[]',
      availability: 'listingsAndReview_availability',
      bathrooms: 'decimal128?',
      bed_type: 'string?',
      bedrooms: 'int?',
      beds: 'int?',
      calendar_last_scraped: 'date?',
      cancellation_policy: 'string?',
      cleaning_fee: 'decimal128?',
      description: 'string?',
      extra_people: 'decimal128?',
      first_review: 'date?',
      guests_included: 'decimal128?',
      host: 'listingsAndReview_host',
      house_rules: 'string?',
      images: 'listingsAndReview_images',
      interaction: 'string?',
      last_review: 'date?',
      last_scraped: 'date?',
      listing_url: 'string?',
      maximum_nights: 'string?',
      minimum_nights: 'string?',
      monthly_price: 'decimal128?',
      name: 'string?',
      neighborhood_overview: 'string?',
      notes: 'string?',
      number_of_reviews: 'int?',
      price: 'decimal128?',
      property_type: 'string?',
      review_scores: 'listingsAndReview_review_scores',
      reviews: 'listingsAndReview_reviews[]',
      reviews_per_month: 'int?',
      room_type: 'string?',
      security_deposit: 'decimal128?',
      space: 'string?',
      summary: 'string?',
      transit: 'string?',
      weekly_price: 'decimal128?',
    },
    primaryKey: '_id',
  };
}
