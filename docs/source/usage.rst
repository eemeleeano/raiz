Usage
=====

Setup
-----

First, clone the repository into your preferred dictory:

.. code-block:: console

   cd path/to/dir/
   git clone https://github.com/eemeleeano/raiz

Then, check Python installation:

.. code-block:: console

   python3 --version

If not installed, use your preferred package manager. Otherwise, change into project directory:

.. code-block:: console

   cd raiz/

Then, create a new virtual environment and activate it:

.. code-block:: console

   python3 -m venv venv
   source venv/bin/activate

Then install dependencies:

.. code-block:: console

   pip3 install -r requirements.txt
   # or pip3 install flask

Run the services (in different terminals):

.. code-block:: console

   python3 ui/ui.py
   python3 everything/everything.py
