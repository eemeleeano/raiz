# Raiz
Food Network. Watch this space!

## Setup

First, clone the repository into your preferred dictory:

```
cd path/to/dir/
git clone https://github.com/eemeleeano/raiz
```

Then, check Python installation:

```
python3 --version
```

If not installed, use your preferred package manager. Otherwise, change into project directory:

```
cd raiz/
```

Then, create a new virtual environment and activate it:

```
python3 -m venv venv
source venv/bin/activate
```

Then install dependencies:

```
pip3 install -r requirements.txt
# or pip3 install flask
```

Run the services (in different terminals):

```
python3 ui/ui.py
python3 everything/everything.py
```
