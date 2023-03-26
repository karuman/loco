import sys
import datetime
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore


# ------------------------------------------------------------------
def add_data_proc(db,note,idx,img_url):
    doc_ref = db.collection('2023k').document()
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
    add_data_proc(db,'20230215','00','1Z_6kn7J73UVZ3o8EwS4qHFZVd7Vc_4n0')
    add_data_proc(db,'20230215','01','1Ei3wy9xOWlRyjCAP_xG3TNyZX39hxjJh')
    add_data_proc(db,'20230215','02','1pK6RKxemYu_-rR378pWAWh0xx_RKtOxf')
    add_data_proc(db,'20230215','03','16VvFDjYvqnSKXzws08VrjXgAI66h7wuY')
    add_data_proc(db,'20230215','04','1R4woRMWJv8ij44bqFkX5n_wAtiWjPnFx')
    add_data_proc(db,'20230215','05','1vucR5C__Udl5_V6A7Y1_43JH_xS7EQSK')
    add_data_proc(db,'20230215','06','1LhdVCGcxDYg5TqBjSWfnSI4kuPhvnAoV')
    add_data_proc(db,'20230215','07','1r_4Pf59SmpwXxw-rkI3fmNAPs95n7fUg')
    add_data_proc(db,'20230215','08','1i1EhxDgLaxTVu97LlEoLg_H9qperyAGV')
    add_data_proc(db,'20230215','09','1iAf-xJwMo6E9lEwJk9Pnk6RM3w6FTohK')
    add_data_proc(db,'20230215','10','1R9VnHPM2pddL_LpfWep4rmVowo66nK3y')
    add_data_proc(db,'20230215','11','1zzqB_ED5JjVEmWh3OONQ-RPLaWVxryto')
    add_data_proc(db,'20230215','12','1PpGjdU8sU2cqCH70PjaEhq9bxFavxF5y')
#

except Exception as ee:
    sys.stderr.write("*** error *** in firestore.Client ***\n")
    sys.stderr.write(str(ee) + "\n")
#
sys.stderr.write("*** 終了 ***\n")
# ------------------------------------------------------------------

