module.exports = {
  additionalProperties: false,
  type: 'object',
  required: ['id', 'impid', 'price'],
  properties: {
    id: { type: 'string' },
    impid: { type: 'string' },
    price: { type: 'number', minimum: 0 },
    nurl: { type: 'string', format: 'uri' },
    burl: { type: 'string', format: 'uri' },
    lurl: { type: 'string', format: 'uri' },
    adm: { type: 'string' },
    adid: { type: 'string' },
    adomain: { items: { type: 'string' } },
    bundle: { type: 'string' },
    iurl: { type: 'string', format: 'uri' },
    cid: { type: 'string' },
    crid: { type: 'string' },
    tactic: { type: 'string' },
    cat: { items: { type: 'string' } },
    attr: { items: { type: 'integer', enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17] } },
    api: { type: 'integer', enum: [1, 2, 3, 4, 5, 6] },
    protocol: { type: 'integer', enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    qagmediarating: { type: 'integer', enum: [1, 2, 3] },
    language: { type: 'string' },
    dealid: { type: 'string' },
    w: { type: 'integer' },
    h: { type: 'integer' },
    wratio: { type: 'integer' },
    hratio: { type: 'integer' },
    exp: { type: 'integer' },
    ext: { type: 'object' }
  }
}