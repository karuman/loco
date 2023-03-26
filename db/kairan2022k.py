import sys
import datetime
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore


# ------------------------------------------------------------------
def add_data_proc(db,note,idx,img_url):
    doc_ref = db.collection('2022k').document()
    doc_ref.set({
        'note'   : note,
        'idx'    : idx,
        'img_url': img_url,
    })
#
# ------------------------------------------------------------------
sys.stderr.write("*** 開始 ***\n")
try:
    cred = credentials.ApplicationDefault()
    cred = credentials.Certificate("nakamaru-bde80-firebase-adminsdk-xbpd3-321bc11266.json")
    firebase_admin.initialize_app(cred)

    db = firestore.client()
#
    add_data_proc(db,'20221215','0','1HjpsSpqw0iVE4sfvJGssqYXbUxQshIHl')
    add_data_proc(db,'20221215','1','1X7o1-6dXYLank7SKqHaXCEqmBr1P9EOB')
    add_data_proc(db,'20221215','2','1obiEezlGmFz_TB8A3Z38ltzXmMShJNJr')
    add_data_proc(db,'20221215','3','1UtN2nGyGz0s-8wBYyJQfjCGhhXcW9dMv')
    add_data_proc(db,'20221215','4','142yYd2NPhLYCbf6FyDw8_72QtdoPeXEg')
    add_data_proc(db,'20221215','5','1qednJeI7KMLlhymL397ByiML2LPG1nFx')
    add_data_proc(db,'20221215','6','1-rXhNu1OBBgue8yIaxbjM6qjOuKN-Qaj')
    add_data_proc(db,'20221215','7','1XVT7DSWCyWkI46ujfoNK6sXgb7-uUh3V')
    add_data_proc(db,'20221215','8','1ym5rAU1QlLaG4OQNsRiLgpCalWWJ5lti')
    add_data_proc(db,'20221215','9','1TZNXUs-aitd3uT0o-ds5ybE6dSJPazcq')
#

except Exception as ee:
    sys.stderr.write("*** error *** in firestore.Client ***\n")
    sys.stderr.write(str(ee) + "\n")
#
sys.stderr.write("*** 終了 ***\n")
# ------------------------------------------------------------------

