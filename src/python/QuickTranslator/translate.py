import clr
import os
import sys

# Get DLL Path
dirPath = os.path.dirname(os.path.realpath(__file__))
dllPath = os.path.join(dirPath, "QuickTranslator/")
sys.path.append(dllPath)

# Add to CLR
clr.AddReference("TranslatorEngine")
from TranslatorEngine import TranslatorEngine
TranslatorEngine.LoadDictionaries()


def translate(str):
    string = TranslatorEngine.ChineseToVietPhraseOneMeaningForBatch(
        str, 0, 2, True)
