from googleapiclient.discovery import build
from httplib2 import Http
from oauth2client import file, client, tools

# If modifying these scopes, delete the file token.pickle.
SCOPES = ['https://www.googleapis.com/auth/drive']


def main():

    target='07.15'
    folder_id = '1GBJZobLdIdROaT2olOVTpM_ztPhOUUqo' #Public

    store = file.Storage('token.json')
    creds = store.get()
    if not creds or creds.invalid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = client.flow_from_clientsecrets('./client_secret_628517423564-gmkjn6iri7a9of9v5j18l8o06mcocbh7.apps.googleusercontent.com.json', SCOPES)
            creds = tools.run_flow(flow, store)

    service = build('drive', 'v3', http=creds.authorize(Http()))

    # Call the Drive v3 API
    results = service.files().list(q="'{0}' in parents".format(folder_id)).execute()
    items = results.get('files', [])

    target_id=''
    if not items:
        print('No Folders found.')
    else:
        for item in items:
            if target==item['name']:
                target_id=item['id']

    if target_id=='':
        print('Target Folder: {0}   not Found'.format(target))
        return
    else:
        print(u'Target Folder : {0} ({1})'.format(target, target_id))
        
    results = service.files().list(q="'{0}' in parents".format(target_id)).execute()
    items = results.get('files', [])
    count = 1
    if not items:
        print('No files found.')
    else:
        items.sort(key=lambda x: x['name'])
        for item in items:
            if item['mimeType'] == 'image/jpeg':
                print(u'{0:0>2} {1} ({2}) {3}'.format(count,item['name'], item['id'], item['mimeType']))
                count = count + 1
if __name__ == '__main__':
    main()
