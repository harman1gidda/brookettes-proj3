const request = require('supertest');
// const app = require('./app'); // adjust path if needed
const api = request('http://localhost:8081');

describe('GET routes', () => {
  
  test('GET / should return a success message', () => {
    return api
      .get('/')
      .expect(200)
      .expect("application is up and running");
  });

  test('GET /sites should return an array of sites', () => {
    return api
      .get('/sites')
      .expect(200)
      .expect('Content-Type', /json/);
  });

  test('GET /sites/:id should return one site (if exists)', () => {
    return api
      .get('/sites/1') 
      .expect(200)
      .expect('Content-Type', /json/);
  });

  test('GET /maintenance should return an array of maintenance records', () => {
    return api
      .get('/maintenance')
      .expect(200)
      .expect('Content-Type', /json/);
  });

  test('GET /maintenance/:id should return one record (if exists)', () => {
    return api
      .get('/maintenance/1') 
      .expect(200)
      .expect('Content-Type', /json/);
  });

});

// ----------------------
// POST
// ----------------------
describe('POST routes', () => {
  test('POST /sites', async () => {
    const res = await api
      .post('/sites')
      .send({ site_name: 'Test Site' })
      .expect(200);

    const allSites = await api.get('/sites');
    siteId = allSites.body[allSites.body.length - 1].id;
  });

  test('POST /maintenance', async () => {
    const res = await api
      .post('/maintenance')
      .send({
        task_title: 'Test Task',
        site_id: siteId,
        start_date: '2025-04-01',
        end_date: '2025-04-05',
        condition_color: 'Red'
      })
      .expect(200);

    const allMaintenance = await api.get('/maintenance');
    maintenanceId = allMaintenance.body[allMaintenance.body.length - 1].id;
  });
});

// ----------------------
// PATCH
// ----------------------
describe('PATCH routes', () => {
  test('PATCH /sites/:id', () => {
    return api
      .patch(`/sites/${siteId}`)
      .send({ site_name: 'Updated Site' })
      .expect(200);
  });

  test('PATCH /maintenance/:id', () => {
    return api
      .patch(`/maintenance/${maintenanceId}`)
      .send({
        condition_color: 'Yellow',
        approved_rejected: true,
        approver_comments: 'Test comment'
      })
      .expect(200);
  });
});

// ----------------------
// DELETE
// ----------------------
describe('DELETE routes', () => {
  test('DELETE /maintenance/:id', () => {
    return api
      .delete(`/maintenance/${maintenanceId}`)
      .expect(200);
  });

  test('DELETE /sites/:id', () => {
    return api
      .delete(`/sites/${siteId}`)
      .expect(200);
  });
});