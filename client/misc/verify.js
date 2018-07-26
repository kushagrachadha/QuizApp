import { Random } from 'meteor/random';


randomizer = function(correct, wrong)
    {
        var arr = [1, 2, 3, 4];
        var randNumber = Random.choice(arr);
        var res = [];
        switch(randNumber)
        {
            case 1:
            {
                res[0] = correct;
                res[1] = clean(wrong[0]);
                res[2] = clean(wrong[1]);
                res[3] = clean(wrong[2]);
                break;
            }
            case 2:
            {
                res = wrong;
                res[3] = correct;
                break;
            }
            case 3:
            {
                res[0] = clean(wrong[0]);
                res[1] = clean(wrong[1]);
                res[2] = correct;
                res[3] = clean(wrong[2]);
                break;
            }
            case 4:
            {
                res[0] = clean(wrong[0]);
                res[1] = correct;
                res[2] = clean(wrong[1]);
                res[3] = clean(wrong[2]);
                break;
            }
            default:
            {
                res = wrong;
                res[3] = correct;
                break;
            }
        }
        return res;
    }

