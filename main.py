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
from TranslatorEngine import DictionaryConfigurationHelper
TranslatorEngine.LoadDictionaries()
string = TranslatorEngine.ChineseToVietPhraseOneMeaningForBatch(
    '第二章 人生再初见', 0, 2, True)
print(string)
