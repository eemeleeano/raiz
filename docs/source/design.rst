Design
======

Requirements
------------

User must be able to:

- View growers in area
- View harvests by grower
- Chat with grower about harvest

Entities
--------

- harvest: A **harvest** will be a type of produce, a quantity, location, images,
   and other information. Each **harvest** is uploaded/created by a **grower**.
- grower: A **grower** will be the one to upload **harvests**. They can upload
   a bio, a location, an image, and other information about themselves.

Data model
----------

- ``harvests``:
   - ``id``
   - ``grower_id``
   - ``name``
   - ``quantity``

- ``growers``:
   - ``id``
   - ``name``
   - ``description``
   - ``bio``
   - ``location``
