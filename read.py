import cv2
import numpy

cap = cv2.VideoCapture(-1)
detector = cv2.QRCodeDetector()
defaultFont = cv2.FONT_HERSHEY_SIMPLEX

spreadsheetFile = "dados.csv"
vistos = []


def detectQR():
    while True:
        _, img = cap.read()
        
        #evitando os primeiros frames vazios
        if type(img) != numpy.ndarray:
            continue

        data, bbox, _ = detector.detectAndDecode(img)

        if bbox is not None:
            lns = list(map(lambda l: list(map(lambda n: int(n), l)), bbox[0]))
            
            for i in range(len(lns)):
                nextid = (i+1) % len(lns)
                cv2.line(img, tuple(lns[i]), tuple(lns[nextid]), (255, 0, 255), thickness=2)
      
            if data:
                if data in vistos:
                    cv2.putText(img, "ja visto", (lns[0][0], lns[0][1]-10), defaultFont, 1.0, (0, 255, 255), thickness=2)
                    cv2.imshow("img", img)    
                else:
                    cv2.putText(img, data, (lns[0][0], lns[0][1]-10), defaultFont, 1.0, (0, 255, 255), thickness=2)
                    cv2.imshow("img", img)    
                    while True:
                        k = cv2.waitKey(0)
                        if k == ord("n"):
                            break
                        elif k == ord("s"):
                            vistos.append(data)
                            return data
                
        cv2.imshow("img", img)    
        if cv2.waitKey(1) == ord("q"):
            return None

def insertOnSpreadsheet(val):
    #TODO inserir header caso o arquivo esteja vazio
    with open(spreadsheetFile, "a+") as fd:
        fd.write(val)
        fd.write("\n")

while True:
    val = detectQR()
    if val != None:
        insertOnSpreadsheet(val)

cap.release()
cv2.destroyAllWindows()
