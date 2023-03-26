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
    add_data_proc(db,'20230115','0','1JFZwg6FfZkWfaX52BinVlQHqbWmIQjNl')
    add_data_proc(db,'20230115','1','1dmj68MpYjgsjLGkERPaglEnNF-Gk5WPE')
    add_data_proc(db,'20230115','2','1yBDL26cfbnuj0rUJJIsVbMGwxLOklKvt')
    add_data_proc(db,'20230115','3','1qGnxvI0NfPJEx-4bjD5dQ_W7ez_fArq5')
    add_data_proc(db,'20230115','4','1HQXV9HHtoRpjPPVUFVKQ2nvTYPHOCyBx')
    add_data_proc(db,'20230115','5','1jUxs5BP52IJ4NVNRdWxLYb2xcN9nd1QQ')
    add_data_proc(db,'20230115','6','1VJlr_fXiO0dboDId7AegYM1iLRYUASCo')
    add_data_proc(db,'20230115','7','1cI3TkpoRyyxZxziGo4-1SiRwyhxqxEM5')
    add_data_proc(db,'20230115','8','1VWvkxlIy3K9ae-powL-GANKhJuBsCT15')
    add_data_proc(db,'20230115','9','1LLyKhYukqMv4xtl9HQt7AYqqMSYpKPNF')
    add_data_proc(db,'20230115','10','1oveAGS31GwUB2uc2zpSuWPAgZu5PDLoN')
    add_data_proc(db,'20230115','11','1FRwoT7EmRL5LW00M5GVhGH3BPNmLzvdw')
    add_data_proc(db,'20230115','12','1OpZAMwCVm_mXMukot5r-uCx9qP7o7Naz')
    add_data_proc(db,'20230115','13','1EA3aE2h4QnQpDUXTuJ9wSLqeBsipq6em')
    add_data_proc(db,'20230201','0','1KtPpnjnFcgTUCuieMw7XJ11OSWHlYUXh')
    add_data_proc(db,'20230201','1','1eppw_y7yA9BF0GqqTV69aM3-C0iKcAYT')
    add_data_proc(db,'20230201','2','1IUZad1HtOTxSTduhvZs1XejY9BamnrZQ')
    add_data_proc(db,'20230201','3','1iSCZDhitvog7Q0uqw4zzS2rGN9ewDDvz')
    add_data_proc(db,'20230201','4','1k7Xq5X8SQTAxX_8l6dXn-6wWQYyQgbk0')
    add_data_proc(db,'20230201','5','1Zg0TuJKBAtDzRxu7h73pSxHDPbk6Jd-S')
    add_data_proc(db,'20230201','6','1gMlaaQKilBdno-mAzsMXkriG2TlpL5cj')
    add_data_proc(db,'20230201','7','1uLBEpu_AcCjtiXlEr_NULfbP4AIGokuD')
#

except Exception as ee:
    sys.stderr.write("*** error *** in firestore.Client ***\n")
    sys.stderr.write(str(ee) + "\n")
#
sys.stderr.write("*** 終了 ***\n")
# ------------------------------------------------------------------

